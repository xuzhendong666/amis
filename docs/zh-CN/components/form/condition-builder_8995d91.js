amis.define('docs/zh-CN/components/form/condition-builder.md', function(require, exports, module, define) {

  module.exports = {
    "title": "组合条件",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "组合条件",
    "icon": null,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>用于设置复杂组合条件，支持添加条件，添加分组，设置组合方式，拖拽排序等功能。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"文本\",\n              \"type\": \"text\",\n              \"name\": \"text\"\n            },\n            {\n              \"label\": \"数字\",\n              \"type\": \"number\",\n              \"name\": \"number\"\n            },\n            {\n              \"label\": \"布尔\",\n              \"type\": \"boolean\",\n              \"name\": \"boolean\"\n            },\n            {\n              \"label\": \"选项\",\n              \"type\": \"select\",\n              \"name\": \"select\",\n              \"options\": [\n                {\n                  \"label\": \"A\",\n                  \"value\": \"a\"\n                },\n                {\n                  \"label\": \"B\",\n                  \"value\": \"b\"\n                },\n                {\n                  \"label\": \"C\",\n                  \"value\": \"c\"\n                },\n                {\n                  \"label\": \"D\",\n                  \"value\": \"d\"\n                },\n                {\n                  \"label\": \"E\",\n                  \"value\": \"e\"\n                }\n              ]\n            },\n            {\n              \"label\": \"动态选项\",\n              \"type\": \"select\",\n              \"name\": \"select2\",\n              \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/getOptions?waitSeconds=1\"\n            },\n            {\n              \"label\": \"日期\",\n              \"children\": [\n                {\n                  \"label\": \"日期\",\n                  \"type\": \"date\",\n                  \"name\": \"date\"\n                },\n                {\n                  \"label\": \"时间\",\n                  \"type\": \"time\",\n                  \"name\": \"time\"\n                },\n                {\n                  \"label\": \"日期时间\",\n                  \"type\": \"datetime\",\n                  \"name\": \"datetime\"\n                }\n              ]\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%80%BC%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E\" href=\"#%E5%80%BC%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>值格式说明</h2><pre><code class=\"language-ts\"><span class=\"token keyword\">type</span> <span class=\"token class-name\">ValueGroup</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  conjunction<span class=\"token operator\">:</span> <span class=\"token string\">'and'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'or'</span><span class=\"token punctuation\">;</span>\n  children<span class=\"token operator\">:</span> <span class=\"token builtin\">Array</span><span class=\"token operator\">&lt;</span>ValueGroup <span class=\"token operator\">|</span> ValueItem<span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">ValueItem</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">// 左侧字段，这块有预留类型，不过目前基本上只是字段。</span>\n  left<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">type</span><span class=\"token operator\">:</span> <span class=\"token string\">'field'</span><span class=\"token punctuation\">;</span>\n    field<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\">// 还有更多类型，暂不细说</span>\n  op<span class=\"token operator\">:</span> <span class=\"token string\">'equals'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'not_equal'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'less'</span> <span class=\"token operator\">|</span> <span class=\"token string\">'less_or_equal'</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\">// 根据字段类型和 op 的不同，值格式会不一样。</span>\n  <span class=\"token comment\">// 如果 op 是范围，right 就是个数组 [开始值，结束值]，否则就是值。</span>\n  right<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">type</span> <span class=\"token class-name\">Value</span> <span class=\"token operator\">=</span> ValueGroup<span class=\"token punctuation\">;</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9\" href=\"#%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>字段选项</h2><p>字段选项为这个组件主要配置部分，通过 <code>fields</code> 字段来配置，有哪些字段，并且字段的类型是什么，支持哪些比较操作符。</p>\n<p><code>fields</code> 为数组类型，每个成员表示一个可选字段，支持多个层，配置示例</p>\n<pre><code class=\"language-json\"><span class=\"token property\">\"fields\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"字段1\"</span>\n    <span class=\"token comment\">// 字段1</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"字段2\"</span>\n    <span class=\"token comment\">// 字段2</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"字段分组\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"children\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"字段3\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"字段4\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E7%9A%84%E5%AD%97%E6%AE%B5%E7%B1%BB%E5%9E%8B\" href=\"#%E6%94%AF%E6%8C%81%E7%9A%84%E5%AD%97%E6%AE%B5%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持的字段类型</h2><p>这里面能用的字段类型和表单项中的字段类型不一样，还没支持那么多，基本上只有一些基础的类型，其他复杂类型还需后续扩充，目前基本上支持以下这些类型。</p>\n<h3><a class=\"anchor\" name=\"%E6%96%87%E6%9C%AC\" href=\"#%E6%96%87%E6%9C%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文本</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;text&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;equal&#39;, &#39;not_equal&#39;, &#39;is_empty&#39;, &#39;is_not_empty&#39;, &#39;like&#39;, &#39;not_like&#39;, &#39;starts_with&#39;, &#39;ends_with&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code> 默认为 <code>&quot;equal&quot;</code></li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"text\",\n              \"name\": \"a\"\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%95%B0%E5%AD%97\" href=\"#%E6%95%B0%E5%AD%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数字</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;number&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;equal&#39;, &#39;not_equal&#39;, &#39;less&#39;, &#39;less_or_equal&#39;, &#39;greater&#39;, &#39;greater_or_equal&#39;, &#39;between&#39;, &#39;not_between&#39;, &#39;is_empty&#39;, &#39;is_not_empty&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code> 默认为 <code>&quot;equal&quot;</code></li>\n<li><code>minimum</code> 最小值</li>\n<li><code>maximum</code> 最大值</li>\n<li><code>step</code> 步长</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"number\",\n              \"name\": \"a\",\n              \"minimum\": 1,\n              \"maximum\": 10,\n              \"step\": 1\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%97%A5%E6%9C%9F\" href=\"#%E6%97%A5%E6%9C%9F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>日期</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;date&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;equal&#39;, &#39;not_equal&#39;, &#39;less&#39;, &#39;less_or_equal&#39;, &#39;greater&#39;, &#39;greater_or_equal&#39;, &#39;between&#39;, &#39;not_between&#39;, &#39;is_empty&#39;, &#39;is_not_empty&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code> 默认为 <code>&quot;equal&quot;</code></li>\n<li><code>defaultValue</code> 默认值</li>\n<li><code>format</code> 默认 <code>&quot;YYYY-MM-DD&quot;</code> 值格式</li>\n<li><code>inputFormat</code> 默认 <code>&quot;YYYY-MM-DD&quot;</code> 显示的日期格式。</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"date\",\n              \"name\": \"a\"\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4\" href=\"#%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>日期时间</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;datetime&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;equal&#39;, &#39;not_equal&#39;, &#39;less&#39;, &#39;less_or_equal&#39;, &#39;greater&#39;, &#39;greater_or_equal&#39;, &#39;between&#39;, &#39;not_between&#39;, &#39;is_empty&#39;, &#39;is_not_empty&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code> 默认为 <code>&quot;equal&quot;</code></li>\n<li><code>defaultValue</code> 默认值</li>\n<li><code>format</code> 默认 <code>&quot;&quot;</code> 值格式</li>\n<li><code>inputFormat</code> 默认 <code>&quot;YYYY-MM-DD HH:mm&quot;</code> 显示的日期格式。</li>\n<li><code>timeFormat</code> 默认 <code>&quot;HH:mm&quot;</code> 时间格式，决定输入框有哪些。</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"datetime\",\n              \"name\": \"a\"\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%97%B6%E9%97%B4\" href=\"#%E6%97%B6%E9%97%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>时间</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;time&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;equal&#39;, &#39;not_equal&#39;, &#39;less&#39;, &#39;less_or_equal&#39;, &#39;greater&#39;, &#39;greater_or_equal&#39;, &#39;between&#39;, &#39;not_between&#39;, &#39;is_empty&#39;, &#39;is_not_empty&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code> 默认为 <code>&quot;equal&quot;</code></li>\n<li><code>defaultValue</code> 默认值</li>\n<li><code>format</code> 默认 <code>&quot;HH:mm&quot;</code> 值格式</li>\n<li><code>inputFormat</code> 默认 <code>&quot;HH:mm&quot;</code> 显示的日期格式。</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"time\",\n              \"name\": \"a\"\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9\" href=\"#%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>下拉选择</h3><ul>\n<li><code>type</code> 字段配置中配置成 <code>&quot;select&quot;</code></li>\n<li><code>label</code> 字段名称。</li>\n<li><code>placeholder</code> 占位符</li>\n<li><code>operators</code> 默认为 <code>[ &#39;select_equals&#39;, &#39;select_not_equals&#39;, &#39;select_any_in&#39;, &#39;select_not_any_in&#39; ]</code> 如果不要那么多，可以配置覆盖。</li>\n<li><code>defaultOp</code></li>\n<li><code>options</code> 选项列表，<code>Array&lt;{label: string, value: any}&gt;</code></li>\n<li><code>source</code> 动态选项，请配置 api。</li>\n<li><code>searchable</code> 是否可以搜索</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n          \"type\": \"condition-builder\",\n          \"label\": \"条件组件\",\n          \"name\": \"conditions\",\n          \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n          \"fields\": [\n            {\n              \"label\": \"A\",\n              \"type\": \"select\",\n              \"name\": \"a\",\n              \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/getOptions?waitSeconds=1\",\n              \"searchable\": true\n            }\n          ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96\" href=\"#%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>字段选项远程拉取</h2><ul>\n<li>方式 1 配置 <code>source</code> 接口返回的数据对象 <code>data</code> 中存在 fields 变量即可。</li>\n<li>方式 2 关联上下文变量如 <code>source: &quot;${xxxxField}&quot;</code></li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n      {\n        \"type\": \"condition-builder\",\n        \"label\": \"条件组件\",\n        \"name\": \"conditions\",\n        \"description\": \"适合让用户自己拼查询条件，然后后端根据数据生成 query where\",\n        \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/condition-fields?a=${a}&waitSeconds=2\"\n      }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 dom 类名</td>\n</tr>\n<tr>\n<td>fieldClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>输入字段的类名</td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code></td>\n<td></td>\n<td>通过远程拉取配置项</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "值格式说明",
          "fragment": "%E5%80%BC%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
          "fullPath": "#%E5%80%BC%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E",
          "level": 2
        },
        {
          "label": "字段选项",
          "fragment": "%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9",
          "fullPath": "#%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9",
          "level": 2
        },
        {
          "label": "支持的字段类型",
          "fragment": "%E6%94%AF%E6%8C%81%E7%9A%84%E5%AD%97%E6%AE%B5%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E6%94%AF%E6%8C%81%E7%9A%84%E5%AD%97%E6%AE%B5%E7%B1%BB%E5%9E%8B",
          "level": 2,
          "children": [
            {
              "label": "文本",
              "fragment": "%E6%96%87%E6%9C%AC",
              "fullPath": "#%E6%96%87%E6%9C%AC",
              "level": 3
            },
            {
              "label": "数字",
              "fragment": "%E6%95%B0%E5%AD%97",
              "fullPath": "#%E6%95%B0%E5%AD%97",
              "level": 3
            },
            {
              "label": "日期",
              "fragment": "%E6%97%A5%E6%9C%9F",
              "fullPath": "#%E6%97%A5%E6%9C%9F",
              "level": 3
            },
            {
              "label": "日期时间",
              "fragment": "%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4",
              "fullPath": "#%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4",
              "level": 3
            },
            {
              "label": "时间",
              "fragment": "%E6%97%B6%E9%97%B4",
              "fullPath": "#%E6%97%B6%E9%97%B4",
              "level": 3
            },
            {
              "label": "下拉选择",
              "fragment": "%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9",
              "fullPath": "#%E4%B8%8B%E6%8B%89%E9%80%89%E6%8B%A9",
              "level": 3
            }
          ]
        },
        {
          "label": "字段选项远程拉取",
          "fragment": "%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96",
          "fullPath": "#%E5%AD%97%E6%AE%B5%E9%80%89%E9%A1%B9%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
