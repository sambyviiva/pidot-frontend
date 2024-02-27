"use server";

import { revalidatePath } from "next/cache";
import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
import { s3Client } from "./_aws/s3Client";

export interface IFormState {
  status: string | null;
  message: string | null;
}

const uploadFileToS3 = async (
  file: Buffer,
  fileName: string,
  fileType: string
) => {
  const fileBuffer = file;

  const params: PutObjectCommandInput = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: fileType,
  };
  const command = new PutObjectCommand(params);

  try {
    const response = await s3Client.send(command);
    console.log("response", response);
    return fileName;
  } catch (error) {
    throw error;
  }
};

export async function uploadFile(prevState: IFormState, formData: FormData) {
  try {
    const file = formData.get("file") as File;

    console.log("file", file);

    if (file?.size === 0) {
      return { status: "error", message: "Please select file" };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("start");

    const response = await uploadFileToS3(buffer, file.name, file.type);
    console.log("end");

    revalidatePath("/");
    return { status: "success", message: "file has been uploaded" };
  } catch (error) {
    console.log("error", error);
    return {
      status: "error",
      message: `failed to upload file: ${JSON.stringify(error)}`,
    };
  }
}
