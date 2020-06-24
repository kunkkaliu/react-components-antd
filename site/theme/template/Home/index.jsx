import React from 'react';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import Page1 from './Page1';
import Footer from '../Layout/Footer';

// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      padding: 0 24px;
    }
    #header #logo {
      padding: 0;
    }
    #header .ant-row > div:last-child .header-lang-button {
      margin-right: 0;
    }
    .content-wrapper {
      padding: 40px;
    }
    .markdown .toc {
      background: #f2f4f5;
      border-left: 2px solid #eee;
    }
    .toc .bisheng-toc-h2 {
      width: auto;
    }
  `;
}

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  static contextTypes = {
    isMobile: PropTypes.bool.isRequired,
  };

  render() {
    const { intl } = this.props;
    const { isMobile } = this.context;
    const childProps = { ...this.props, isMobile, locale: intl.locale };
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: getStyle() }} /> {/* eslint-disable-line */}
        <Helmet encodeSpecialCharacters={false}>
          <title>{`React Ant - ${intl.formatMessage({ id: 'app.home.slogan' })}`}</title>
        </Helmet>
        <Page1 {...childProps} />
        <Footer />
      </>
    );
  }
}

export default injectIntl(Home);
