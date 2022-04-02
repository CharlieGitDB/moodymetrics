'use strict';

/**
 *  mood controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mood.mood', ({ strapi }) => ({
  async create(ctx) {
    const { user } = ctx.state;
    const { mood } = ctx.request.body.data;

    let moodEntry;
    try {
      moodEntry = await strapi.entityService.create('api::mood.mood', {
        data: {
          mood,
          date: getToday(),
          owner: user.id
        }
      });
    } catch(err) {
      console.log(err);
      return ctx.body = err;
    }

    return ctx.body = moodEntry;
  },
  async find(ctx) {
    const { user } = ctx.state;
    return await strapi.entityService.findMany('api::mood.mood', {
      filters: {
        owner: user.id
      }
    });
  }
}));


function getToday() {
  return new Date().toISOString().split('T')[0];
}