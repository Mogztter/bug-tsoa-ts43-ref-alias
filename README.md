# bug-tsoa-ts43-ref-alias

A sample project to reproduce an issue with tsoa 3.14.1 and Typescript >= 4.2.2

## Usage

    $ npm i
    $ npm run spec

The last command should throw an exception:

```
Generate swagger error.
 Error: @Query('securitySeverity') Can't support 'refAlias' type. 
 in 'TestController.getSecurityIssues'
    at new GenerateMetadataError (/home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/exceptions.js:22:28)
    at /home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/methodGenerator.js:95:23
    at Array.map (<anonymous>)
    at MethodGenerator.buildParameters (/home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/methodGenerator.js:88:14)
    at MethodGenerator.Generate (/home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/methodGenerator.js:63:31)
    at /home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:60:58
    at Array.map (<anonymous>)
    at ControllerGenerator.buildMethods (/home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:60:14)
    at ControllerGenerator.Generate (/home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/controllerGenerator.js:49:27)
    at /home/guillaume/workspace/opensource/bug-tsoa-ts43-ref-alias/node_modules/tsoa/node_modules/@tsoa/cli/dist/metadataGeneration/metadataGenerator.js:215:58
```

You can update the version of Typescript to 4.1.6 in `package.json` and run the above commands again.
This time, it works!


