<template><div><p>常用的布局切换按钮。</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>基础的布局切换按钮用法。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;layout-switch :imgPath=&quot;imgPath&quot; :title=&quot;title&quot; :layoutName=&quot;layoutName&quot; @changeLayout=&quot;changeLayout&quot;&gt;&lt;/layout-switch&gt;
  &lt;layout-switch :imgPath=&quot;imgPath2&quot; :title=&quot;title2&quot; :layoutName=&quot;layoutName2&quot; @changeLayout=&quot;changeLayout2&quot;&gt;&lt;/layout-switch&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const title = '1x2';
const title2 = '2x2';
const layoutName = '1x2hip';
const layoutName2 = '2x2hip';
const imgPath = '/img/layout_12.svg';
const imgPath2 = '/img/layout.png';

const changeLayout = (layoutName) =&gt; {
  console.log(layoutName)
}
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>使用布局切换按钮，点击发送不同的布局</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">layout-switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">imgPath</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">imgPath</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">title</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">layoutName</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">layoutName</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">changeLayout</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">changeLayout</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">layout-switch</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">layout-switch</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">imgPath</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">imgPath2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">title</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">title2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">layoutName</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">layoutName2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">@</span><span style="color: var(--shiki-token-function)">changeLayout</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">changeLayout2</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">layout-switch</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { ref } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">title</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;1x2&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">title2</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;2x2&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">layoutName</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;1x2hip&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">layoutName2</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;2x2hip&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">imgPath</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;/img/layout_12.svg&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">imgPath2</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;/img/layout.png&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">changeLayout</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> (layoutName) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(layoutName)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3>
<p>LayoutSwitch组件的属性说明如下：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>imagePath</td>
<td>图片路径</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td>按钮下方文字</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>layoutName</td>
<td>布局名称</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>changeLayout</td>
<td>点击按钮时的回调</td>
<td>layoutName</td>
</tr>
</tbody>
</table>
</div></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_layout_switch = _resolveComponent("layout-switch")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_layout_switch, {
      imgPath: _ctx.imgPath,
      title: _ctx.title,
      layoutName: _ctx.layoutName,
      onChangeLayout: _ctx.changeLayout
    }, null, 8, ["imgPath", "title", "layoutName", "onChangeLayout"]),
    _createVNode(_component_layout_switch, {
      imgPath: _ctx.imgPath2,
      title: _ctx.title2,
      layoutName: _ctx.layoutName2,
      onChangeLayout: _ctx.changeLayout2
    }, null, 8, ["imgPath", "title", "layoutName", "onChangeLayout"])
  ], 64))
}
  
    const { ref } = Vue;


const democomponentExport = {
  setup(__props, { expose }) {
  expose();

const title = '1x2';
const title2 = '2x2';
const layoutName = '1x2hip';
const layoutName2 = '2x2hip';
const imgPath = '/img/layout_12.svg';
const imgPath2 = '/img/layout.png';

const changeLayout = (layoutName) => {
  console.log(layoutName)
}

const __returned__ = { title, title2, layoutName, layoutName2, imgPath, imgPath2, changeLayout, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>