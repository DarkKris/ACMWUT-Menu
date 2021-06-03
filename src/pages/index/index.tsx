import * as React from 'react';
import MenuBar from 'components/menu';
import './index.less';

export default function IndexPage() {
  return (
    <>
      <div className="light-effect">
        <div className="light-effect__blue"></div>
        <div className="light-effect__yellow"></div>
        <div className="light-effect__red"></div>
      </div>
      <div className="index-page">
        <div className="index-page__header">
          <MenuBar/>
        </div>
        <div className="index-page__content">
          <div className="content__title">ACM@WUT</div>
        </div>
      </div>
    </>
  );
}