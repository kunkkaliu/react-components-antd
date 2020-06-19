import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page1() {
  return (
    <ScrollOverPack id="page1" className="content-wrapper">
      <article className="markdown">
        <h1>组件平台（React版）</h1>
        <section className="toc">
          <ul>
            <li>
              <a className="bisheng-toc-h2" href="https://ant.design/index-cn" title="安装">
                基于Ant Design of React开发
              </a>
            </li>
          </ul>
        </section>
        <section className="markdown">
          <h2 id="安装">
            <span>安装</span>
            <a href="#安装" className="anchor">
              #
            </a>
          </h2>
          <h3 id="使用-npm-或-yarn-安装">
            <span>使用 npm 或 yarn 安装</span>
            <a href="#使用-npm-或-yarn-安装" className="anchor">
              #
            </a>
          </h3>
          <p>
            <strong>推荐使用 yarn 的方式进行开发</strong>
          </p>
          <pre className="language-bash">
            <code>
              $ <span className="token function">npm</span>{' '}
              <span className="token function">install</span> react-components --save
            </code>
          </pre>
          <pre className="language-bash">
            <code>$ yarn add react-components</code>
          </pre>
          <h3 id="引入样式">
            <span>引入样式</span>
            <a href="#引入样式" className="anchor">
              #
            </a>
          </h3>
          <p>
            在<code>react-components/dist</code> 目录下提供了 <code>react-components.less</code>等。
          </p>
          <h3 id="按需加载">
            <span>按需加载</span>
            <a href="#按需加载" className="anchor">
              #
            </a>
          </h3>
          <p>下面两种方式都可以只加载用到的组件。</p>
          <pre className="language-jsx">
            <code>
              <span className="token keyword">import</span>{' '}
              <span className="token punctuation">{'{'}</span> Star{' '}
              <span className="token punctuation">{'}'}</span>{' '}
              <span className="token keyword">from</span>{' '}
              <span className="token string">react-ant</span>
              <span className="token punctuation">;</span>
            </code>
          </pre>
          <pre className="language-jsx">
            <code>
              <span className="token keyword">import</span> Star{' '}
              <span className="token keyword">from</span>{' '}
              <span className="token string">react-ant/lib/star</span>
              <span className="token punctuation">;</span>
            </code>
          </pre>
        </section>
        <section className="markdown api-container">&nbsp;</section>
      </article>
    </ScrollOverPack>
  );
}
