import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import RcFooter from 'rc-footer';

function Footer() {
  return (
    <RcFooter
      columns={[]}
      bottom={
        <>
          Copyright ©<FormattedMessage id="app.footer.author" /> {new Date().getFullYear()}
        </>
      }
    />
  );
}

export default injectIntl(Footer);
