import { v4 as uuidv4 } from 'uuid';

module.exports = {
  async beforeCreate(event: any) {
    const { data, where, select, populate } = event.params;
    data.uid=uuidv4()
    const company = await strapi.entityService.findMany("api::company.company");

    // let's do a 20% discount everytime
    console.log(data);
  },
};
