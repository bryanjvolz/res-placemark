var fieldObject,fieldLayers,newLayer,placemark,fieldName;$(document).ready(function(){function e(){fieldLayers=$("form > div").length,newLayer=fieldLayers+1,fieldObject='<div class="field'+newLayer+'"><div class="form-group"><label for="field_name">Field Name</label><input id="field_name" name="field_name" type="text" placeholder="Field Name"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 1</label><input id="anchor_'+newLayer+'" name="anchor_1" type="text" placeholder="Anchor 1 Intel Link"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 2</label><input id="anchor_'+newLayer+'" name="anchor_'+newLayer+'" type="text" placeholder="Anchor 2 Intel Link"></div><div class="form-group"><label for="anchor_'+newLayer+'">Anchor 3</label><input id="anchor_'+newLayer+'" name="anchor_'+newLayer+'" type="text" placeholder="Anchor 3 Intel Link"></div></div>',$("form > div.field"+fieldLayers).append(fieldObject)}$(".more").on("click",function(){e()}),$(".plot").on("click",function(e){$("form").validate(),e.preventDefault(),fieldName=$("#field_name").val();var l=$("#anchor_1").val(),a=$("#anchor_2").val(),t=$("#anchor_3").val();l=l.slice(l.indexOf("pll=")+4),a=a.slice(a.indexOf("pll=")+4),t=t.slice(t.indexOf("pll=")+4),l=l.split(","),a=a.split(","),t=t.split(","),placemark="&lt;Placemark&gt;&lt;name&gt;"+fieldName+"&lt;/name&gt;&lt;styleUrl&gt;#poly-9FC3FF-4-76&lt;/styleUrl&gt;&lt;ExtendedData&gt;&lt;/ExtendedData&gt;&lt;Polygon&gt;&lt;outerBoundaryIs&gt;&lt;LinearRing&gt;&lt;tessellate&gt;1&lt;/tessellate&gt;&lt;coordinates&gt;"+l[1]+","+l[0]+",6 "+a[1]+","+a[0]+",6 "+t[1]+","+t[0]+",6 "+l[1]+","+l[0]+"&lt;/coordinates&gt;&lt;/LinearRing&gt;&lt;/outerBoundaryIs&gt;&lt;/Polygon&gt;&lt;/Placemark&gt;",$(".results").slideDown().children("pre").html(placemark)})});