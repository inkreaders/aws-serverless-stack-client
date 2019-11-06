export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "inkreaders-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4xwhgsisud.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jz7aiWbkO",
    APP_CLIENT_ID: "1s2cpaf1o07m71cdrtcga624s7",
    IDENTITY_POOL_ID: "us-east-1:b4122d4a-7a2a-4548-9347-c755627a7022"
  }
};
