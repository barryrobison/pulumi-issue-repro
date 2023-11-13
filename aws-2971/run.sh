export PULUMI_CONFIG_PASSPHRASE=""
export PULUMI_SKIP_CONFIRMATIONS=true
export PULUMI_BACKEND_URL=file://.pulumi/
export PULUMI_STACK=pulumi-repro-2971

mkdir -p .pulumi
mkdir -p stacks

pulumi stack select "${PULUMI_STACK}" || pulumi stack init "${PULUMI_STACK}"
pulumi up --stack "${PULUMI_STACK}"

