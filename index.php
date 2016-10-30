<?php wp_head(); ?>

<!doctype html>
<html>
  <head>

<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() ?>/style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

    <meta charset="UTF-8">
	
    <title>Hello React</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

<script>

var test = '<?php echo home_url(); ?>/wp-json/wp/v2/posts';

</script>

<script src="<?php echo get_stylesheet_directory_uri() . "/bundle.js" ?>"></script>

<?php wp_footer(); ?>