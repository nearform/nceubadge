#!/bin/bash

# http://infocenter.nordicsemi.com/index.jsp?topic=%2Fcom.nordic.infocenter.tools%2Fdita%2Ftools%2Fnrf5x_command_line_tools%2Fnrf5x_command_line_tools_lpage.html
nrfjprog --family NRF52 --clockspeed 50000 --program firmware.hex --chiperase --reset
