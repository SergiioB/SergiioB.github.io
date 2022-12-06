<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ies' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'usbw' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^sP<W.Ly?%)o}S611CIWx%!E-(Kt27_O|[dbDP5<SPls-,kx0?>a^TXp5i#T9$6h' );
define( 'SECURE_AUTH_KEY',  '38Q@AE;M$n[}iFkE10q0RD!wsm0q}uf*^taWpe61=kkqGL:V!C2K;>#r+G@u]U~e' );
define( 'LOGGED_IN_KEY',    'dpI?L;e5Iz^?jPveS*Rakb}[}snEq!!vg),o]w`lavmu:e/u_e}@?I?75zIZ>DB@' );
define( 'NONCE_KEY',        '{?s3;,[^>%tDAxM%mQB=tH1~~M_KijUUxKRZtd$_S7,B!@8!:qf/N8-?eQaK)qnb' );
define( 'AUTH_SALT',        '+MMv..5t0-@TX,C*691z]ZJ0JN96EBWSoa$;][,PgdMcD#dY-d-1%q]fPDZf:>Wz' );
define( 'SECURE_AUTH_SALT', ']BkO(VWdjTaTBX4}]g3:gl$k#HaXC/KZs^cA1=Gf`v-O.U2Pz!ja=FvE/E-O)nxt' );
define( 'LOGGED_IN_SALT',   '{_@nG7~xVdDV!&]w:e!]@ircy8,l%tarf+<rKw?AqNd{_ikK+`7?DPNILd^1B1~R' );
define( 'NONCE_SALT',       '8QOL%/pJX>Tfu4&~7hK/I$g.8O`,K*DORRTJ}N{8Jp2-%,(W@t,a._LH^C?M`]mV' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
