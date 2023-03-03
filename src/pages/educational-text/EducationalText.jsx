import React from "react";
import "./EducationalText.scss";
import Button from "../../ui/button-view/Button";

export default function EducationalText({ ChangeIsTestShow }) {
  return (
    <div className="educational-text">
      <h1>Правила китайских шахмат</h1>
      <p>
        Сянци — китайская настольная игра для двух игроков. Его еще называют китайскими шахматами.
        Игра во многом похожа на традиционные шахматы. Эта игра популярна не только в Китае, но и во
        всем мире.
      </p>
      <h2>Цель игры</h2>
      <p>Захватить вражеского генерала.</p>
      <h2>Подготовка к игре cянци</h2>
      <ul>
        <li>Играют на доске 9x10 линий.</li>
        <li>Фигуры устанавливаются на пересечениях линий, а не в клетках.</li>
        <li>
          Между двумя центральными горизонтальными линиями расположена река, влияющая на
          передвижение воинов, коней и слонов.
        </li>
        <li>
          Отмеченные двумя имеющимися на доске диагональными линиями квадраты 3 на 3 называются
          дворцами или крепостями.
        </li>
        <li>Генералы и советники согласно правилам не могут выходить из этих квадратов.</li>
      </ul>
      <h2>Запоминаем фигуры и обозначения</h2>

      <div className="educational-text__img">
        <img src="./img/playing-board.png" alt="img" />
        <img src="./img/figures.jpg" alt="img" />
        {/* <img src="./ikit/img/playing-board.png" alt="img" />
        <img src="./ikit/img/figures.jpg" alt="img" /> */}
      </div>

      <div className="educational-text__figures">
        <h2>Как ходят разные фигуры в сянци</h2>
        <ul>
          <li>
            <b>Генерал</b> может передвигаться только на 1 пункт за 1 ход, в горизонтальном либо
            вертикальном направлении. Также он должен не покидать пределы своего дворца – квадрата,
            состоящего из 9-и пунктов, который ограничивается диагоналями.
          </li>
          <li>
            <b>Пушка</b> может ходить на любое количество пунктов в горизонтальном либо вертикальном
            направлении, аналогично ладье. Но в случае взятия между начальным и конечным пунктами её
            хода должен быть ровно один не пустой (занятый другой фигурой, которая является
            “лафетом”) пункт. В случае же хода без взятия абсолютно все пункты, через которые
            проходит ладья, должны быть пустыми – не занятыми другими фигурами.
          </li>
          <li>
            <b>Губернатор</b> (или защитник) может ходить только на 1 пункт в диагональном
            направлении за 1 ход. Аналогично королю, он не может выходить за пределы дворца.
          </li>
          <li>
            <b>Слон</b> (или министр) ходит в диагональном направлении обязательно на 2 пункта (не
            больше и не меньше). По правилам он не может пересечь реку. Каждая фигура, находясь
            между начальным и конечным пунктами хода слона, блокирует его, вследствие чего этот ход
            слон сделать не может.
          </li>
          <li>
            <b>Конь</b> ходит в горизонтальном направлении ровно на 2 пункта и затем на 1 по
            вертикали либо наоборот – ровно на 2 пункта по вертикали и затем на 1 по горизонтали. В
            случае, когда соседний по горизонтали либо по вертикали с конём пункт занят другой
            фигурой, она блокирует ходы коня в этом направлении и он их совершать не может.
          </li>
          <li>
            <b>Пешка</b> ходит только на 1 пункт. Пешка, которая ещё не перешла через реку, может
            делать ход только вперёд, а пешка, которая “переправилась”, может ходить и по
            горизонтали.
          </li>
          <li>
            <b>Ладья</b> может ходить на любое количество пунктов в вертикальном и в горизонтальном
            направлении при условии, что ни на одном пункте, через которые проходит эта фигура, нет
            других фигур.
          </li>
          <li>
            Взятие: любая фигура может зайти в пункт, который занимает фигура соперника – в этом
            случае первая фигура “съедает” вражескую фигуру. “Съеденную” фигуру в таком случае
            убирают с доски.
          </li>
          <li>
            Вертикаль короля: два короля не могут стоять на одной вертикали в случае, когда все
            пункты, разделяющие их, пусты. Ход, который создаёт такую ситуацию, запрещён правилами.
          </li>
          <li>
            Безопасность короля: правила запрещают оставлять короля в таком пункте, в котором
            соперник может съесть его. Запрещён ход, который ставит короля под удар.
          </li>
        </ul>
        <p>
          Некоторые другие ходы также запрещены правилами. Запрещено постоянно угрожать взятием
          какой-либо фигуры соперника, используя как одну, так и две или более собственных фигур.
          Такой ход называется “вечный шах” (если создаётся угроза королю) либо “вечная атака” (если
          угрожают другой фигуре, кроме короля).
        </p>
      </div>

      <div className="educational-text__terms">
        <h2>Термины</h2>
        <p>
          <b>Мат</b>– это победа игрока, который ставит его королю соперника.
        </p>
        <p>
          <b>Шах</b> — ход, который угрожает королю соперника взятием на следующем ходу.
        </p>
        <p>
          <b>Однотипная жертва </b> (или размен) — ход в пункт, с которого эта фигура может съесть
          фигуру соперника, относящуюся к тому же виду, таким образом, что какая-либо фигура
          соперника затем также сможет съесть эту фигуру на следующем ходу.
        </p>
        <p>
          <b>Атака</b> — ход любой фигуры в пункт, с которого она может съесть фигуру соперника
          (кроме короля) на следующем ходу. Атака – это также и такой ход фигуры, вследствие
          которого она становится “лафетом” своей пушки, которая в этой позиции угрожает фигуре
          соперника.
        </p>
        <p>Здесь есть исключения:</p>
        <ul>
          <li>угроза, создаваемая королём либо пешкой, не является атакой.</li>
          <li>угроза, создаваемая пешкой, которая ещё не перешла реку, не является атакой.</li>
          <li>угроза, ведущая к размену, также не является атакой.</li>
        </ul>
        <p>
          <b>Защищённость</b> — фигура является защищённой, когда есть другая фигура, которая может
          съесть любую из фигур, которая съест первую фигуру. Исключением из этого правила является
          ладья, которая никогда не защищена в случае, если ей угрожает пушка либо конь
        </p>
      </div>

      <div className="educational-text__attack">
        <h2>Вечный шах и вечная атака</h2>
        <p>
          Правила запрещают вечный шах и вечную атаку. При нарушении этого правила засчитывается
          поражение нарушающему игроку. В случае, когда обе стороны нарушают это правило
          одновременно, засчитывается ничья. Если же один игрок создаёт вечный шах, а другой в тот
          же момент – вечную атаку, засчитывается поражение игроку, создающему вечный шах.
        </p>
        <p>
          Согласно правилам атака или шах могут совершаться не более 6-и раз подряд одной фигурой,
          не более 12-и раз подряд двумя фигурами, не более 18-и раз подряд – тремя фигурами, после
          чего шах/атака признаётся вечным/вечной.
        </p>
      </div>

      <div className="educational-text__end-game">
        <h2>Окончание игры</h2>
        <p>Игра завершается в одном из трёх случаев:</p>
        <ul>
          <li>
            Мат: матом является угроза королю соперника взятием, от которой он не может защититься.
          </li>
          <li>
            Пат: ситуация, когда один игрок не может сделать ни одного хода, не противоречащего
            правилам.
          </li>
          <li>Один либо оба игрока нарушил(и) правила.</li>
        </ul>
      </div>

      <div className="educational-text__figures-value">
        <h2>Ценность фигур</h2>
        <p>
          В игре сянци есть определённая шкала ценности фигур (ценность пешки, не перешедшей реку,
          принята за единицу, ценность других фигур выражается в разном количестве не
          переправившихся пешек):
        </p>
        <ul>
          <li>Ладья – девять.</li>
          <li>Пушка – четыре с половиной.</li>
          <li>Конь – четыре.</li>
          <li>Слон – две.</li>
          <li>Губернатор (защитник) – две.</li>
          <li>Пешка, пересёкшая реку – две.</li>
        </ul>
      </div>

      <div className="educational-text__features-game">
        <h2>Особенности игры</h2>
        <p>
          Во время игры в сянци важно не впадать в крайности – не увлекаться только нападением или
          только защитой. Имеет большое значение сбалансированность игры, в противном случае даже
          при огромном материальном преимуществе можно легко потерпеть поражение. Баланс, то есть
          гармония противоположных начал между собой, является фундаментальной позицией китайской
          философии и чертой китайской ментальности. Эта особенность сянци, впрочем, имеет довольно
          простую причину: ходы короля ограничены пределами дворца, потому порой после потери
          игроком инициативы даже на 1 ход его соперник «уничтожает» небольшими силами недостаточно
          защищённого короля.
        </p>
      </div>
      <Button mt={30} title={" Пройти тест"} fun={ChangeIsTestShow} />
    </div>
  );
}
