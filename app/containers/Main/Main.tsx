/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
  Body: typeof React.Component;
}

/**
 * Drawer Wrapper Component that receives the body component to render in to the wrapper.
 *
 * @param {Object} body That represent the body component.
 */
const MainWrapper = ({ Body }: Props) => {
  return (
    <div className="app-wrapper-web">
      <main className="_3dqpi">
        <Body />
      </main>
    </div>
  );
};

const RoutedWrapper = withRouter(MainWrapper);

export default RoutedWrapper;
