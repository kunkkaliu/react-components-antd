import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon } from 'antd';
import { Link } from 'bisheng/router';
import RcFooter from 'rc-footer';
import { getLocalizedPathname } from '../utils';

function Footer(props) {
  function getColumns() {
    const { intl = {} } = props;
    const isZhCN = intl.locale === 'zh-CN';
    return [
      {
        title: <FormattedMessage id="app.footer.resources" />,
        items: [
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true,
          },
          {
            title: 'Ant Design Mobile',
            url: 'https://mobile.ant.design',
            openExternal: true,
          },
        ],
      },
      {
        title: <FormattedMessage id="app.footer.community" />,
        items: [
          {
            icon: <Icon type="ant-design" />,
            title: <FormattedMessage id="app.footer.awesome" />,
            url: 'https://github.com/websemantics/awesome-ant-design',
            openExternal: true,
          },
          {
            icon: <Icon type="zhihu" style={{ color: '#0084ff' }} />,
            title: <FormattedMessage id="app.footer.zhihu" />,
            url: 'http://zhuanlan.zhihu.com/antdesign',
            openExternal: true,
          },
        ],
      },
      {
        title: <FormattedMessage id="app.footer.help" />,
        items: [
          {
            icon: <Icon type="github" />,
            title: 'GitHub',
            url: 'https://github.com/kunkkaliu/react-components-antd',
            openExternal: true,
          },
          {
            icon: <Icon type="history" />,
            title: <FormattedMessage id="app.footer.change-log" />,
            url: getLocalizedPathname('/changelog', isZhCN),
            LinkComponent: Link,
          },
          {
            icon: <Icon type="issues-close" />,
            title: <FormattedMessage id="app.footer.issues" />,
            url: 'https://github.com/kunkkaliu/react-components-antd/issues',
            openExternal: true,
          },
        ],
      },
      {
        title: <FormattedMessage id="app.footer.more-product" />,
        items: [
          {
            title: <FormattedMessage id="app.footer.fengdie" />,
            url: 'https://yunfengdie.com',
            description: <FormattedMessage id="app.footer.fengdie.slogan" />,
            openExternal: true,
          },
          {
            title: 'AntV',
            url: 'https://antv.vision',
            description: <FormattedMessage id="app.footer.antv.slogan" />,
            openExternal: true,
          },
          {
            title: 'Egg',
            url: 'https://eggjs.org',
            description: <FormattedMessage id="app.footer.egg.slogan" />,
            openExternal: true,
          },
        ],
      },
    ];
  }

  return (
    <RcFooter
      columns={getColumns()}
      bottom={
        <>
          Copyright ©<FormattedMessage id="app.footer.author" /> {new Date().getFullYear()}
        </>
      }
    />
  );
}

export default injectIntl(Footer);
