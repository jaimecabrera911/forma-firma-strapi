import type { Schema, Attribute } from '@strapi/strapi';

export interface FormsField extends Schema.Component {
  collectionName: 'components_forms_fields';
  info: {
    displayName: 'Field';
    icon: 'manyWays';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.JSON;
    type: Attribute.Enumeration<
      [
        'string,',
        'integer,',
        'date,',
        'dateTime,',
        'boolean,',
        'array,',
        'object,',
        'radio'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'forms.field': FormsField;
    }
  }
}
