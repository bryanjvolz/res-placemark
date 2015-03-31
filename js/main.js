var fieldObject,fieldLayers,newLayer,placemark,fieldName;

$(document).ready(function(){

      $(".more").on("click",function(){
        //console.log("Pushin' it");
        addField();
      });

      function addField(){
        fieldLayers = $("form > div").length;
        newLayer = fieldLayers+1;
        //console.log(fieldLayers+" / "+newLayer);

        fieldObject = '<div class="field'+newLayer+'"><div class="form-group"><label for="field_name">Field Name</label><input id="field_name" name="field_name" type="text" placeholder="Field Name"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 1</label><input id="anchor_'+newLayer+'" name="anchor_1" type="text" placeholder="Anchor 1 Intel Link"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 2</label><input id="anchor_'+newLayer+'" name="anchor_'+newLayer+'" type="text" placeholder="Anchor 2 Intel Link"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 3</label><input id="anchor_'+newLayer+'" name="anchor_'+newLayer+'" type="text" placeholder="Anchor 3 Intel Link"></div></div>';

        $("form > div.field"+fieldLayers).append( fieldObject );
      }//addField();

      $(".plot").on("click",function(e){
        $("form").validate();

        e.preventDefault();
        fieldName = $("#field_name").val();
        var anchor1 = $("#anchor_1").val();
        var anchor2 = $("#anchor_2").val();
        var anchor3 = $("#anchor_3").val();

        anchor1 = anchor1.slice( anchor1.indexOf('pll=') + 4 );
        anchor2 = anchor2.slice( anchor2.indexOf('pll=') + 4 );
        anchor3 = anchor3.slice( anchor3.indexOf('pll=') + 4 );

        anchor1 = anchor1.split(',');
        anchor2 = anchor2.split(',');
        anchor3 = anchor3.split(',');

        placemark = '&lt;Placemark&gt;&lt;name&gt;'+fieldName+'&lt;/name&gt;&lt;styleUrl&gt;#poly-9FC3FF-4-76&lt;/styleUrl&gt;&lt;ExtendedData&gt;&lt;/ExtendedData&gt;&lt;Polygon&gt;&lt;outerBoundaryIs&gt;&lt;LinearRing&gt;&lt;tessellate&gt;1&lt;/tessellate&gt;&lt;coordinates&gt;'+anchor1[1]+','+anchor1[0]+',6 '+anchor2[1]+','+anchor2[0]+',6 '+anchor3[1]+','+anchor3[0]+',6 '+anchor1[1]+','+anchor1[0]+'&lt;/coordinates&gt;&lt;/LinearRing&gt;&lt;/outerBoundaryIs&gt;&lt;/Polygon&gt;&lt;/Placemark&gt;';

        $(".results").slideDown().children("pre").html( placemark );
      });


});