<template><div><p>常用的组织列表</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<p>基础的组织列表组件的用法。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;tissue-list :tissueList=&quot;tissues&quot;&gt;&lt;/tissue-list&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const tissues = [
  {
    tissueId: 1,
    name: '组织1',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 2,
    name: '组织2',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 3,
    name: '组织3',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
];

&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>使用组织列表</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">tissue-list</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">tissueList</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">tissues</span><span style="color: var(--shiki-color-text)">&quot;</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">tissue-list</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">setup</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> { ref } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;vue&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">tissues</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    tissueId</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;组织1&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;rgba(255,255,255,1)&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    visibility</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    isSelected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    volume</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    vrAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    mprAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    deleteEnabled</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    selected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    tissueId</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;组织2&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;rgba(255,255,255,1)&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    visibility</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    isSelected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    volume</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    vrAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    mprAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    deleteEnabled</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    selected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    tissueId</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;组织3&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    color</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;rgba(255,255,255,1)&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    visibility</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    isSelected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    volume</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">100</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    vrAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    mprAlpha</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">70</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    deleteEnabled</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    selected</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">];</span></span>
<span class="line"></span>
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
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_tissue_list = _resolveComponent("tissue-list")

  return (_openBlock(), _createBlock(_component_tissue_list, { tissueList: _ctx.tissues }, null, 8 /* PROPS */, ["tissueList"]))
}
  
    const { ref } = Vue;


const democomponentExport = {
  setup(__props, { expose }) {
  expose();

const tissues = [
  {
    tissueId: 1,
    name: '组织1',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 2,
    name: '组织2',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
  {
    tissueId: 3,
    name: '组织3',
    color: 'rgba(255,255,255,1)',
    visibility: true,
    isSelected: false,
    volume: 100,
    vrAlpha: 70,
    mprAlpha: 70,
    deleteEnabled: true,
    selected: false,
  },
];


const __returned__ = { tissues, ref }
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