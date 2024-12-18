module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     新功能（feature）' },
    { value: 'fix', name: '🐛 fix:      修复 Bug' },
    { value: 'docs', name: '📚 docs:     文档变更' },
    { value: 'style', name: '💄 style:    代码格式（不影响功能的变动）' },
    { value: 'refactor', name: '🔨 refactor: 代码重构（既不是新增功能，也不是修复 Bug）' },
    { value: 'perf', name: '⚡ perf:     性能优化' },
    { value: 'test', name: '✅ test:     增加测试' },
    { value: 'build', name: '📦 build:    构建系统或外部依赖的变更' },
    { value: 'ci', name: '🔧 ci:       修改 CI 配置文件和脚本' },
    { value: 'chore', name: '🧹 chore:    其他不修改 src 或测试文件的变动' },
    { value: 'revert', name: '⏪ revert:   回滚提交' }
  ],
  // 提交范围（项目中的模块或功能）
  scopes: [
    { name: 'src' },
  ],
   // 提示消息配置
  messages: {
    type: '请选择提交类型（必填）：',
    scope: '请输入修改的范围（可选）：',
    // customScope: '请输入自定义范围：',
    subject: '请简要描述提交内容（必填）：',
    body: '请输入详细描述（可选）：',
    breaking: '列出任何重大更改（可选）：\n',
    // footer: '请输入要关闭的 Issue（可选）：',
    confirmCommit: '确认提交内容吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 72,
  skipEmptyScopes: true,
   // 提交时的样式配置
  //  skipQuestions: [], // 跳过字段
  // 自定义 issue 的后缀，比如 GitLab 使用的是 `!123`
  issuePrefix: '#'
};
