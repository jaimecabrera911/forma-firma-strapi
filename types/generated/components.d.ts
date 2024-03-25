import type { Schema, Attribute } from '@strapi/strapi';

export interface FormsField extends Schema.Component {
  collectionName: 'components_forms_fields';
  info: {
    displayName: 'Field';
    icon: 'manyWays';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.String;
    value: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.field': FormsField;
    }
  }
}
