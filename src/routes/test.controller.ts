import { Get, Query, Route } from 'tsoa'

export type Severity = 'critical' | 'high' | 'medium' | 'low'

export type SecuritySeverity = Exclude<Severity, 'low'>

@Route('/test')
export class TestController {
    @Get('/values')
    public async getSecurityIssues(@Query('type') securitySeverity: SecuritySeverity): Promise<void> {
        return Promise.resolve()
    }
}
