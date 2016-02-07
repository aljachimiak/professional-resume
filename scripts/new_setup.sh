#!/usr/bin/env bash

fail () {
  echo "$@" >&2
  exit 1
}

main () {
  update_package_list
  install_tools
  clean_up_packages
  install_bash_profile
  install_node
  install_npm
  restart_services
}

print_section () {
  local msg="$1"
  echo "************************************************************"
  echo "$msg"
  echo "************************************************************"
}

install_node () {
  print_section "Installing Node.js"
  sudo apt-get install nodejs -y || fail "Unable to install Node.js."
}

install_npm () {
  print_section "Installing node package manager [npm]."
  sudo apt-get install npm -y || fail "Unable to install npm."
}

install_tools () {
  print_section "Installing good-to-have packages"
  sudo apt-get install -y \
    build-essential \
    git-core \
    vim \
    curl \
    ack-grep \
    wget \
    tree \
    || fail "Unable to install tools."
}

update_package_list () {
  print_section "Updating package list"
  sudo apt-get update
}

clean_up_packages () {
  print_section "Cleaning up packages"
  (sudo apt-get autoremove -y && sudo apt-get autoclean -y) \
  || fail "Unable to clean up packages"
}

install_bash_profile () {
  print_section "Installing .bash_profile"
  cp /vagrant/configs/.bash_profile /home/vagrant/.bash_profile
  chown vagrant:vagrant /home/vagrant/.bash_profile
}

restart_services () {
  print_section "Restart services"
  sudo service apache2 restart
}

main "$@"

