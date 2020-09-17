// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7q15f05hkcm8hv3p5056csk6e0",     // CognitoClientID
  "api_base_url": "https://dt9ge4bs0d.execute-api.ap-southeast-2.amazonaws.com/dev",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-lambda-ref-arch.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d19qrxfeg3wvb7.amplifyapp.com"                                      // AmplifyURL
};

export default config;
