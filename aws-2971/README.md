# pulumi-issue-repro


Output of panic:
```
Previewing update (pulumi-repro-2971):
     Type                   Name                            Plan       Info
     pulumi:pulumi:Stack    pulumi-repro-pulumi-repro-2971             1 error; 28 messages
 ~   └─ aws:ec2:NatGateway  pulumi-repro-2971               update     [diff: ~secondaryAllocationIds]; 1 er


Diagnostics:
  pulumi:pulumi:Stack (pulumi-repro-pulumi-repro-2971):
    error: preview failed

    panic: fatal: An assertion has failed: Expected diff to not require deletion or replacement during Update of urn:pulumi:pulumi-repro-2971::pulumi-repro::aws:ec2/natGateway:NatGateway::pulumi-repro-2971
    goroutine 43 [running]:
    github.com/pulumi/pulumi/sdk/v3/go/common/util/contract.failfast(...)
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi/sdk/v3@v3.91.1/go/common/util/contract/failfast.go:23
    github.com/pulumi/pulumi/sdk/v3/go/common/util/contract.Assertf(0x60?, {0x10d3c45da?, 0x1117a1da8?}, {0x14006d115b8?, 0x140027a6ff0?, 0x11165ffe0?})
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi/sdk/v3@v3.91.1/go/common/util/contract/assert.go:35 +0xe0
    github.com/pulumi/pulumi-terraform-bridge/v3/pkg/tfbridge.(*Provider).Update(0x140000b3600, {0x111797a88?, 0x1400260bf20?}, 0x14000de83f0)
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi-terraform-bridge/v3@v3.63.2/pkg/tfbridge/provider.go:965 +0x5ec
    github.com/pulumi/pulumi-terraform-bridge/x/muxer.(*muxer).Update.func1({0x1117c8508?, 0x140000b3600?})
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi-terraform-bridge/x/muxer@v0.0.7-0.20230801203955-5d215c892096/muxer.go:356 +0x3c
    github.com/pulumi/pulumi-terraform-bridge/x/muxer.resourceMethod[...](0x14006d1ad20?, 0x14006c69788, 0x14006c69768?)
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi-terraform-bridge/x/muxer@v0.0.7-0.20230801203955-5d215c892096/muxer.go:303 +0xc4
    github.com/pulumi/pulumi-terraform-bridge/x/muxer.(*muxer).Update(0x14006c697c8?, {0x111797a88?, 0x1400260bf20?}, 0x10f0e89c0?)
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi-terraform-bridge/x/muxer@v0.0.7-0.20230801203955-5d215c892096/muxer.go:355 +0x5c
    github.com/pulumi/pulumi/sdk/v3/proto/go._ResourceProvider_Update_Handler.func1({0x111797a88, 0x1400260bf20}, {0x1111d50e0?, 0x14000de83f0})
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi/sdk/v3@v3.91.1/proto/go/provider_grpc.pb.go:629 +0x74
    github.com/grpc-ecosystem/grpc-opentracing/go/otgrpc.OpenTracingServerInterceptor.func1({0x111797a88, 0x1400260b230}, {0x1111d50e0, 0x14000de83f0}, 0x14003c05980, 0x140027a6f18)
        /home/runner/go/pkg/mod/github.com/grpc-ecosystem/grpc-opentracing@v0.0.0-20180507213350-8e809c8a8645/go/otgrpc/server.go:57 +0x2e8
    github.com/pulumi/pulumi/sdk/v3/proto/go._ResourceProvider_Update_Handler({0x111453a40?, 0x14006d1ad20}, {0x111797a88, 0x1400260b230}, 0x140009cfa40, 0x14006be7740)
        /home/runner/go/pkg/mod/github.com/pulumi/pulumi/sdk/v3@v3.91.1/proto/go/provider_grpc.pb.go:631 +0x12c
    google.golang.org/grpc.(*Server).processUnaryRPC(0x14000042000, {0x1117aac60, 0x1400bb861a0}, 0x1400236a6c0, 0x14006f5bf20, 0x11c3d75d0, 0x0)
        /home/runner/go/pkg/mod/google.golang.org/grpc@v1.58.2/server.go:1376 +0xb44
    google.golang.org/grpc.(*Server).handleStream(0x14000042000, {0x1117aac60, 0x1400bb861a0}, 0x1400236a6c0, 0x0)
        /home/runner/go/pkg/mod/google.golang.org/grpc@v1.58.2/server.go:1753 +0x7c4
    google.golang.org/grpc.(*Server).serveStreams.func1.1()
        /home/runner/go/pkg/mod/google.golang.org/grpc@v1.58.2/server.go:998 +0x84
    created by google.golang.org/grpc.(*Server).serveStreams.func1 in goroutine 84
        /home/runner/go/pkg/mod/google.golang.org/grpc@v1.58.2/server.go:996 +0x154

  aws:ec2:NatGateway (pulumi-repro-2971):
    error: Preview failed: error reading from server: EOF
```
