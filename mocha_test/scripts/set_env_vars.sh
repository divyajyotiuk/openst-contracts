
#!/bin/bash

export OST_UTILITY_GAS_PRICE='0x12A05F200'
export OST_UTILITY_GETH_RPC_PROVIDER='http://127.0.0.1:9546'
export OST_UTILITY_GETH_WS_PROVIDER='ws://127.0.0.1:19546'

export OST_UTILITY_DEPLOYER_ADDR=''
export OST_UTILITY_DEPLOYER_PASSPHRASE='testtest'
export OST_UTILITY_OPS_ADDR=''
export OST_UTILITY_OPS_PASSPHRASE='testtest'
export OST_UTILITY_CHAIN_ID=2000
export OST_AIRDROP_BUDGET_HOLDER=''
export OST_AIRDROP_BUDGET_HOLDER_PASSPHRASE='testtest'

export OP_MYSQL_HOST='127.0.0.1'
export OP_MYSQL_USER='travis'
export OP_MYSQL_PASSWORD=''
export OP_MYSQL_DATABASE='payment_development'
export OP_MYSQL_CONNECTION_POOL_SIZE='5'

export OST_CACHING_ENGINE='none'
export OST_DEBUG_ENABLED=1
export CONFIG_STRATEGY_FILE_NAME='/mocha_test/scripts/config_strategy.js'


export OS_DYNAMODB_API_VERSION='2012-08-10'
export OS_DYNAMODB_ACCESS_KEY_ID='x'
export OS_DYNAMODB_SECRET_ACCESS_KEY='x'
export OS_DYNAMODB_REGION='localhost'
export OS_DYNAMODB_ENDPOINT='http://localhost:8000'
export OS_DYNAMODB_SSL_ENABLED='0'
export OS_DYNAMODB_LOGGING_ENABLED='0'

export OS_AUTOSCALING_API_VERSION='2016-02-06'
export OS_AUTOSCALING_ACCESS_KEY_ID='x'
export OS_AUTOSCALING_SECRET_ACCESS_KEY='x'
export OS_AUTOSCALING_REGION='localhost'
export OS_AUTOSCALING_ENDPOINT='http://localhost:8000'
export OS_AUTOSCALING_SSL_ENABLED='0'
export OS_AUTOSCALING_LOGGING_ENABLED='0'

export OST_STANDALONE_MODE=1
export AUTO_SCALE_DYNAMO=0
