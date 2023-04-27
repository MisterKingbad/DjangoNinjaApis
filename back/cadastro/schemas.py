from ninja import ModelSchema

from cadastro.models import Livro

class LivroSchema(ModelSchema):
  class Config:
    model = Livro
    model_fields = ["titulo", "descricao", "autor"]