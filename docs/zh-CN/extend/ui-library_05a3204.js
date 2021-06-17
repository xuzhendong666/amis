amis.define('docs/zh-CN/extend/ui-library.md', function(require, exports, module, define) {

  module.exports = {
    "title": "将 amis 当成 UI 库用",
    "html": "<div class=\"markdown-body\"><p>amis 不仅有纯配置的用法，还能当成 UI 库来使用，实现 90% 低代码，10% 代码开发的混合模式，在灵活性上。</p>\n<blockquote>\n<p>需要注意以下都需要在配置中写函数，因此不再是纯粹的 JSON，所以暂时不能在可视化编辑器的「代码」模式下使用</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC\" href=\"#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件监听</h2><p>amis 提供了一些交互配置，但有时候这些交互无法满足需求，这时我们可以监听这些事件，然后用代码实现复杂交互需求，比如最常见的是表单事件。</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amisJSON <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n  title<span class=\"token operator\">:</span> <span class=\"token string\">'表单页面'</span><span class=\"token punctuation\">,</span>\n  body<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n      mode<span class=\"token operator\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">onFinished</span><span class=\"token operator\">:</span> <span class=\"token parameter\">values</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span> values<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 这样可以禁掉 amis 后续的默认行为</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      body<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n          type<span class=\"token operator\">:</span> <span class=\"token string\">'input-text'</span><span class=\"token punctuation\">,</span>\n          name<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token function-variable function\">onChange</span><span class=\"token operator\">:</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n            console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'button'</span><span class=\"token punctuation\">,</span>\n      label<span class=\"token operator\">:</span> <span class=\"token string\">'按钮'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">onClick</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'消息通知'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>这个例子中我们监听了 3 个事件，输入框数据变化、表单提交、按钮点击，然后在这些地方使用代码实现特殊功能。</p>\n<h2><a class=\"anchor\" name=\"%E4%BD%BF%E7%94%A8-amis-%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95\" href=\"#%E4%BD%BF%E7%94%A8-amis-%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>使用 amis 中的方法</h2><p>amis 对外还提供了一些方法，比如弹出消息通知，可以通过 <code>amisRequire(&#39;amis&#39;)</code> 获取到这些 amis 对外提供的方法。</p>\n<pre><code class=\"language-javascript\"><span class=\"token keyword\">let</span> amis <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis/embed'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> amisLib <span class=\"token operator\">=</span> <span class=\"token function\">amisRequire</span><span class=\"token punctuation\">(</span><span class=\"token string\">'amis'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">let</span> amisScoped <span class=\"token operator\">=</span> amis<span class=\"token punctuation\">.</span><span class=\"token function\">embed</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#root'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n  type<span class=\"token operator\">:</span> <span class=\"token string\">'page'</span><span class=\"token punctuation\">,</span>\n  title<span class=\"token operator\">:</span> <span class=\"token string\">'表单页面'</span><span class=\"token punctuation\">,</span>\n  body<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    type<span class=\"token operator\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n    mode<span class=\"token operator\">:</span> <span class=\"token string\">'horizontal'</span><span class=\"token punctuation\">,</span>\n    api<span class=\"token operator\">:</span> <span class=\"token string\">'/saveForm'</span><span class=\"token punctuation\">,</span>\n    body<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'button'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'按钮'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function-variable function\">onClick</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          amisLib<span class=\"token punctuation\">.</span>toast<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'消息通知'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>具体有哪些可以参考 <code>https://github.com/baidu/amis/blob/master/src/index.tsx</code></p>\n<h2><a class=\"anchor\" name=\"react-%E4%B8%AD%E5%BC%95%E5%85%A5-amis-%E7%9A%84%E7%BB%84%E4%BB%B6\" href=\"#react-%E4%B8%AD%E5%BC%95%E5%85%A5-amis-%E7%9A%84%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>React 中引入 amis 的组件</h2><p>在 React 环境下使用 amis，还可以直接引入 amis 内置组件，在 amis 项目源码 <code>src/components</code> 下的组件都是标准 React 组件，可以在项目中直接引用，这样就能将 amis 当成纯粹 UI 库来使用。</p>\n<pre><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Button<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'amis/lib/components/index'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span>\n  <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token attr-name\">level</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>link<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>navbar-btn<span class=\"token punctuation\">\"</span></span>\n<span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n  按钮\n</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n</code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "事件监听",
          "fragment": "%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E7%9B%91%E5%90%AC",
          "level": 2
        },
        {
          "label": "使用 amis 中的方法",
          "fragment": "%E4%BD%BF%E7%94%A8-amis-%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95",
          "fullPath": "#%E4%BD%BF%E7%94%A8-amis-%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95",
          "level": 2
        },
        {
          "label": "React 中引入 amis 的组件",
          "fragment": "react-%E4%B8%AD%E5%BC%95%E5%85%A5-amis-%E7%9A%84%E7%BB%84%E4%BB%B6",
          "fullPath": "#react-%E4%B8%AD%E5%BC%95%E5%85%A5-amis-%E7%9A%84%E7%BB%84%E4%BB%B6",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
