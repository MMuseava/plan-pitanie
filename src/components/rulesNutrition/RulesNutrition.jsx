import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BasicExample() {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(4, 1fr)",
				gap: "10px",
				gridAutoRows: "minmax(100px, auto)",
			}}
		>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/474x/3d/c9/ef/3dc9ef5fd7d7df0bfd41551c07aef271.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Инструкция</Card.Title>
					<Card.Text>
						<p>1. Читайте внимательно правила питания.</p>
						<p>2. Покупайте продукты по списку.</p>
						<p>3. Готовьте, используя наши рецепты в качестве подсказки.</p>
						<p>
							4. Чтобы процесс снижения веса шел без остановок, важно менять
							схему питания каждую неделю.
						</p>
						<p>
							Настроить режим питания не всегда легко. Возможно, у вас получится
							придерживаться режима на 60%-80%, и это отлично. Идеального
							питания не бывает ни у кого, но его можно постепенно улучшать.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>

			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/df/f6/8d/dff68dd745e32bfdf19f7011aed859ea.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Сколько приемов пищи и перерывы нужны?</Card.Title>
					<Card.Text>
						<p>
							Три основных приема и по желанию перекус до или после обеда. Без
							подъеданий между. При желании чаще пейте воду и не ведитесь на
							поводу у эмоционального голода. Завтрак в течении 2 часов после
							пробуждения, ужин за 3 часа.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/97/68/eb/9768eb97127b23e78a964d1a68f79848.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Сколько приемов пищи и перерывы нужны?</Card.Title>
					<Card.Text>
						<p>
							Три основных приема и по желанию перекус до или после обеда. Без
							подъеданий между. При желании чаще пейте воду и не ведитесь на
							поводу у эмоционального голода. Завтрак в течении 2 часов после
							пробуждения, ужин за 3 часа.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/d5/5f/dd/d55fdd459a3d1c2fb56ca0a34622c357.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Вода 💦</Card.Title>
					<Card.Text>
						<p>
							Важная часть рациона. Дневная норма - ваш вес*30мл. Пить нужно
							между приемами пищи - это поможет уменьшить голод, если вдруг он
							возникнет. Можно добавлять в воду лимон или травяной чай. Если
							забываете пить воду, то поставьте будильник на протяжении дня.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/736x/9a/e0/d6/9ae0d6121968435cf909bdf06bd7ae17.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Кофе,чай и другие напитки☕️</Card.Title>
					<Card.Text>
						<p>
							Кофе одна - две порции в день с растительным молоком или без —
							через 20 минут после еды. Если есть сильная зависимость от этого
							напитка, заменяйте чёрным или зелёным чаем. Все без сахара/мёда.
							Если с молоком и позднее через 30 минут после приёма пищи —
							считаем как перекус.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/5c/7a/aa/5c7aaa05329b3697df2f37c5408e7a01.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Алкоголь🥂</Card.Title>
					<Card.Text>
						<p>
							Алкоголь не чаще 1 раза в неделю — 200 мл. сухого или полусухого
							вина. На бокал вина приходится стакан воды (пить во время или
							после). И важно выбирать максимально легкую еду под вино — салат с
							сыром/индейкой/рыбой. Или нарезка сырная 50 гр + овощи + оливки
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/736x/a8/33/22/a833223838da9bf2c128c7d5517b6c05.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Сладкое🍰</Card.Title>
					<Card.Text>
						<p>
							Сладкое и фрукты — до перекуса или как дополнение к обеду — через
							30 минут после приёма пищи. Порция фруктов — до 200 гр, порция
							сладкого — до 50 гр, если низкокалорийный продукт — до 100 гр.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/81/77/da/8177da759bb9a3b47ea2f54361c87a38.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Что можно съесть перед сном?</Card.Title>
					<Card.Text>
						<p>
							Если после ужина или обеда хочется есть, сделайте травяной чай.
							Или съешьте порцию овощей в любом виде (100гр). Если пропустили
							ужин и не можете уснуть, за 30–40 минут можно съесть вареное яйцо,
							50гр постного мяса или рыбы с огурцом или томатом
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/50/c9/e6/50c9e60326ee629a4ccc9c118d476836.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Запрещенные продукты</Card.Title>
					<Card.Text>
						<p>
							Продукты с сахаром и фруктозой (сладости), белый хлеб, пиццы,
							суши, кетчупы, майонезы, жаренное и жирное, свинина, сало,
							баранина, сосиски, колбасы, желтый сыр, например: российский и
							плавленый, обычное молоко, обезжиренная молочка, хлопья, каши
							быстрой готовки.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/cc/b2/ea/ccb2eae8ccd382cd8e4694ec2a2f3a0b.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Готовка🧑‍🍳</Card.Title>
					<Card.Text>
						<p>
							Не забывай про специи, семечки, соль — вам должно быть вкусно.
							Пресная еда ведет к срывам. Готовить овощи, рыбу, мясо можно на 1
							ч.л. масла на обычной сковородке — подходит любое нерафинированное
							масло холодного отжима. В длительной готовке (запекать и тушить)
							лучше готовить в воде — добавлять так, чтобы продукт был на 50% в
							воде. Во время готовки вода испарится, а мясо/рыба/овощи не будут
							сухими.&nbsp;
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/b5/2f/82/b52f8297330614d52815eaad7f70317f.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Как менять рацион, если не нужно худеть?</Card.Title>
					<Card.Text>
						<p>
							Увеличивать порции на 20-30%, если рано просыпаетесь, поздно
							ложитесь. Можно добавить еще один перекус или хлебцы с
							сыром/хумусом/авокадо/рыбой.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem", margin: "10px" }}>
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/564x/36/df/40/36df40906bdd42800ab2f6cc5a311fe2.jpg"
					style={{ width: "100%", height: "400px" }}
				/>
				<Card.Body>
					<Card.Title>Как менять рацион, если на ГВ?</Card.Title>
					<Card.Text>
						<p>
							Добавляйте пятый прием пищи с кисломолочными продуктами (йогурт,
							кефир, сыр, творог). Увеличивать порции на 100 гр за счет рыбы,
							птицы, яиц, овощей. Но не за счет каш и хлебцев.
						</p>
					</Card.Text>
					<Button variant="primary">Перейти куда-нибудь</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
