'use strict';
const utils = require("@strapi/utils");
const { PolicyError } = utils.errors;

/**
 * `is-owner` policy.
 */

module.exports = async (policyContext, config, { strapi }) => {
    const { id } = policyContext.request.params;
    const { user } = policyContext.state;

    const mood = await strapi.entityService.findOne('api::mood.mood', id, {
      populate: ['owner']
    });
    
    if (mood && mood.owner.id === user.id) {
      return true;
    }

    throw new PolicyError('Unauthorized');
};
