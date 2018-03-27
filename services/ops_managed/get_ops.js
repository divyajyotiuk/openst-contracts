"use strict";

/**
 *
 * This class would be used for executing getOps.<br><br>
 *
 * @module services/ops_managed/get_ops
 *
 */

const rootPrefix = '../..'
  , responseHelper = require(rootPrefix + '/lib/formatter/response')
  , basicHelper = require(rootPrefix + '/helpers/basic_helper')
  , logger = require(rootPrefix + '/helpers/custom_console_logger')
  , OpsManagedContractInteractKlass = require(rootPrefix + '/lib/contract_interact/ops_managed_contract')
;

/**
 * Constructor to create object of get_ops
 *
 * @constructor
 *
 * @param {string} contract_address - contract address
 * @param {string} gas_price - gas price
 * @param {object} chain_id - chain id
 *
 * @return {Object}
 *
 */
const GetOpsKlass = function (params) {
  logger.debug("=======GetOpsKlass.params=======");
  logger.debug(params);

  const oThis = this
  ;
  oThis.contractAddress = params.contract_address;
  oThis.gasPrice = params.gas_price;
  oThis.chainId = params.chain_id;

};

GetOpsKlass.prototype = {

  /**
   * Perform method
   *
   * @return {promise<result>}
   *
   */
  perform: async function () {
    const oThis = this
    ;
    try {
      var r = null;

      r = await oThis.validateParams();
      logger.debug("=======GetOpsKlass.validateParams.result=======");
      logger.debug(r);
      if (r.isFailure()) return r;

      r = await oThis.getOps();
      logger.debug("=======GetOpsKlass.getOps.result=======");
      logger.debug(r);

      return r;

    } catch (err) {
      return responseHelper.error('s_om_go_perform_1', 'Something went wrong. ' + err.message);
    }

  },

  /**
   * Validation of params
   *
   * @return {promise<result>}
   *
   */
  validateParams: function () {
    const oThis = this
    ;
    if (!basicHelper.isAddressValid(oThis.contractAddress)) {
      return responseHelper.error('s_om_go_validateParams_1', 'contract address is invalid');
    }

    return responseHelper.successWithData({});
  },

  /**
   * get Ops
   *
   * @return {promise<result>}
   *
   */
  getOps: function () {
    const oThis = this
    ;

    const OpsManagedContractInteractObject = new OpsManagedContractInteractKlass(
      oThis.contractAddress,
      oThis.gasPrice,
      oThis.chainId
    );
    return OpsManagedContractInteractObject.getOpsAddress();
  }

};

module.exports = GetOpsKlass;