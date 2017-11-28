<div class="form-horizontal">
  <div class="form-group row">
    <label class="control-label col-sm-5">Qual o custo do seu sonho?</label>
    <div class="input-group col-sm-7">
      <span class="input-group-addon"><i class="fa fa-dollar" aria-hidden="true"></i></span>
      <input type="number" min="0" placeholder="" class="form-control" id="sonho">
    </div>
  </div>
  <div class="form-group row">
    <label class="control-label col-sm-5">Qual o seu salário?</label>
    <div class="input-group col-sm-7">
      <span class="input-group-addon"><i class="fa fa-dollar" aria-hidden="true"></i></span>
      <input type="number" min="0" class="form-control" id="salario">
    </div>
  </div>
  <div class="form-group row">
    <label class="control-label col-sm-5">Qual o seu gasto mensal?</label>
    <div class="input-group col-sm-7">
      <span class="input-group-addon"><i class="fa fa-dollar" aria-hidden="true"></i></span>
      <input type="number" min="0" class="form-control" id="gasto">
    </div>
  </div>
  <div class="text-center">
    <button class="btn btn-outline-success" id="calcular">Calcular</button>
  </div>
  <div class="form-group">
    <div class="card">
      <div id="resultado" class="card-block alert-info">
        Calcule quanto tempo você precisará pra realiza-lo!
      </div>
    </div>
  </div>
</div>
<script src="./public/js/main.js"></script>