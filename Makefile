##########################################
# 		     Dynamic targets 			 #
##########################################
# Exclude current and hidden directories
FIND_PATH = . -mindepth 2 -not -path '*/\.*'
# Define the list of subdirectories that contain a Makefile
SUBDIRS := $(patsubst ./%/Makefile,%,$(shell find $(FIND_PATH) -name Makefile))
TARGETS := $(SUBDIRS)

.PHONY: all $(TARGETS) \
		deploy $(addsuffix -deploy,$(TARGETS)) \
		undeploy $(addsuffix -undeploy,$(TARGETS)) \
		purge $(addsuffix -purge,$(TARGETS)) \
		help

$(TARGETS):
	$(MAKE) -C $@

images: $(addsuffix -images,$(SUBDIRS))

$(addsuffix -images,$(TARGETS)):
	@-$(MAKE) -C $(patsubst %-images,%,$@) images

deploy: $(addsuffix -deploy,$(SUBDIRS))

$(addsuffix -deploy,$(TARGETS)):
	@-$(MAKE) -C $(patsubst %-deploy,%,$@) deploy

undeploy: $(addsuffix -undeploy,$(SUBDIRS))

$(addsuffix -undeploy,$(TARGETS)):
	@-$(MAKE) -C $(patsubst %-undeploy,%,$@) undeploy

purge: $(addsuffix -purge,$(SUBDIRS))

$(addsuffix -purge,$(TARGETS)):
	@-$(MAKE) -C $(patsubst %-purge,%,$@) purge

##########################################
# 		     Static targets 			 #
##########################################
help:
	@echo "## Available targets:"
	@echo $(TARGETS)

follow:
	@podman logs --follow -t --names $(names)