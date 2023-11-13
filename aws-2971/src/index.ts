import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

const stackName = pulumi.getStack();

const provider = new aws.Provider(stackName, {
        region: "ap-southeast-2",
        profile: "pulumi-repro",
        skipMetadataApiCheck: false,
        skipCredentialsValidation: true,
});
new aws.ec2.NatGateway(
    stackName,
    {
        allocationId: "eipalloc-00aa0a80d9067ea02",
        // after a first run to create the NAT Gateway, uncomment
        // the following line to reproduce a terraform panic
        // secondaryAllocationIds: ["eipalloc-05f44f1e5e530b38c"],
        subnetId: "subnet-0722462a35fdcff36",
    },
    { provider },
);