<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RESISTANCE KML Generator</title>

    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <header>
      <h1>Resistance KML</h1>
    </header>

    <main>
      <p>Drop your Intel links here, KML will pop out the other side.</p>

      <hr>

      <form class="" action="kml.rb">
        <div class="form-group">
          <label for="anchor_1">Anchor 1</label>
          <input id="anchor_1" name="anchor_1" type="text" placeholder="Anchor 1 Intel Link">
        </div>
        <div class="form-group">
          <label for="anchor_2">Anchor 2</label>
          <input id="anchor_2" name="anchor_2" type="text" placeholder="Anchor 2 Intel Link">
        </div>
        <div class="form-group">
          <label for="anchor_3">Anchor 3</label>
          <input id="anchor_3" name="anchor_3" type="text" placeholder="Anchor 3 Intel Link">
        </div>
        <hr>

        <a href="#" title="" class="btn btn-secondary"><i class="glyphicon glyphicon-plus"></i> Add Field</a>
        <input type="submit" value="Plot It!" class="btn btn-primary pull-right">
      </form>
    </main>

    <footer>
      <p>Not Resistance? Get Lost.</p>
    </footer>



        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>


    <script>
      $(".more").on("click",addField() );

      function addField(){
        $(".more").append( fieldObject );
      }//addField()

      fieldObject = '<hr><label for="">Anchor 1</label>
      <input type="text" placeholder="">

      <label for="">Anchor 2</label>
      <input type="text" placeholder="">

      <label for="">Anchor 3</label>
      <input type="text" placeholder="">

      <hr>';



    </script>


  </body>
</html>