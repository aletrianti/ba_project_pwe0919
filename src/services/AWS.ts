import { IFileAWSInput } from '../../types/AWS.types';

const aws = require('aws-sdk');

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'eu-central-1',
});

const s3 = new aws.S3();

export const uploadFile = async (props: IFileAWSInput): Promise<string> => {
  try {
    //   maybe needs a modification if we have the need to upload base64 string files
    const params = {
      Bucket: 'hoppin-storage',
      Key: `${props.folder}/${props.name}`,
      Body: props.file,
      ContentType: props.type,
      ACL: 'public-read',
    };

    const response = await s3.upload(params).promise();
    return response.Location;
  } catch (error) {
    throw error;
  }
};
