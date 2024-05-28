import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutNavigationBar extends Schema.Component {
  collectionName: 'components_layout_navigation_bars';
  info: {
    displayName: 'Navigation Bar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    path: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.navigation-bar': LayoutNavigationBar;
    }
  }
}
