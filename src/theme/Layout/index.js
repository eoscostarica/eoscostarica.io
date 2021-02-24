/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import { useMediaQuery } from 'react-responsive'
import './styles.css';

function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName
  } = props
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'}) 
  useKeyboardNavigation()
  return <LayoutProviders>
      <LayoutHead {...props} />
      {isDesktop && 
        <>
          <AnnouncementBar />
          <Navbar isMobile={isMobile}  isDesktop={isDesktop}/>
          <div className={clsx('main-wrapper', wrapperClassName)}>{children}</div>
          <Footer />
        </>
      }
      {isMobile && 
        <>
          <AnnouncementBar />
          <Navbar isMobile={isMobile}  isDesktop={isDesktop}/>
          <div className={clsx('main-wrapper', wrapperClassName)}>{children}</div>
          <Footer />
        </>
      }
    </LayoutProviders>;
}

export default Layout;