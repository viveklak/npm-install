# Bug with pulumi operator


When deploying this stack, the program does not execute:
We have the following output:

```
[resource plugin kubernetes-2.6.3] installing
warning: A new version of Pulumi is available. To upgrade from version '2.10.0' to '2.13.0', visit https://pulumi.com/docs/reference/install/ for manual instructions and release notes.

> @pulumi/kubernetes@2.6.3 install /tmp/pulumi_auto507973823/node_modules/@pulumi/kubernetes
> node scripts/install-pulumi-plugin.js resource kubernetes v2.6.3

[resource plugin kubernetes-2.6.3] installing
warning: A new version of Pulumi is available. To upgrade from version '2.10.0' to '2.13.0', visit https://pulumi.com/docs/reference/install/ for manual instructions and release notes.

> protobufjs@6.10.1 postinstall /tmp/pulumi_auto507973823/node_modules/protobufjs
> node scripts/postinstall

npm WARN bug-npm-install@ No description
npm WARN bug-npm-install@ No repository field.
npm WARN bug-npm-install@ No license field.

added 303 packages from 270 contributors and audited 304 packages in 16.228s

23 packages are looking for funding
  run `npm fund` for details

found 4 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

┌───────────────────────────────────────────────────┐
│              npm update check failed              │
│        Try running with sudo or get access        │
│       to the local update config store via        │
│ sudo chown -R $USER:$(id -gn $USER) /root/.config │
└───────────────────────────────────────────────────┘
```
