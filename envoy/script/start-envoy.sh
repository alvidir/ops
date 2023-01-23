#!/bin/sh

export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
export SOURCE_FILE=/etc/envoy/.config/envoy.yaml;
export TARGET_FILE=/etc/envoy/envoy.yaml;

cat $SOURCE_FILE | envsubst $EXISTING_VARS | tee $TARGET_FILE

/usr/local/bin/envoy --log-level debug -c $TARGET_FILE