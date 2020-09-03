<td>
              <form action="/games/<%=g._id%>?_method=DELETE" method="POST">
                <button class ="small-button red-button" type="submit">X</button>
              </form>
            </td>

router.delete('/:id', gamesCtrl.delete);


function deleteGame(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    res.redirect('/games');
  });
}