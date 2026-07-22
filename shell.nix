{ pkgs ? import <nixpkgs> {} }:

let
  libraries = with pkgs; [
    dbus
    openssl
    glib
    gtk3
    webkitgtk_4_1
    cairo
    pango
    atk
    gdk-pixbuf
    libsoup_3
    harfbuzz
  ];
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    pkg-config
    gobject-introspection
    cargo
    rustc
    nodejs_22
  ];

  buildInputs = libraries;

  shellHook = ''
    # Динамические библиотеки для runtime
    export LD_LIBRARY_PATH="${pkgs.lib.makeLibraryPath libraries}:$LD_LIBRARY_PATH"
    
    # Схемы GTK/GSettings для корректного отображения интерфейса
    export XDG_DATA_DIRS="${pkgs.gsettings-desktop-schemas}/share/gsettings-schemas/${pkgs.gsettings-desktop-schemas.name}:${pkgs.gtk3}/share/gsettings-schemas/${pkgs.gtk3.name}:$XDG_DATA_DIRS"
  '';
}
