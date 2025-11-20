import './style.css'

const name = '홍길동'
const role = '프론트엔드 개발자'
const intro = `안녕하세요! 사용자 경험과 인터랙티브 UI를 좋아하는 프론트엔드 개발자입니다. 깔끔하고 접근성 좋은 인터페이스를 만드는 것을 중요하게 생각합니다.`

const career = [
  { period: '2020 — 2022', title: '회사 A · 프론트엔드' , detail: 'React 기반 SPA 개발, UI 컴포넌트 설계'},
  { period: '2022 — 2024', title: '회사 B · 시니어 프론트엔드' , detail: '성능 개선 및 팀 기술 리드'}
]

document.querySelector('#app').innerHTML = `
  <div class="card">
    <div class="hero">
      <div class="avatar">${name.slice(0,1)}</div>
      <div style="flex:1;min-width:220px;text-align:left">
        <h1 class="name">${name}</h1>
        <div class="role">${role}</div>
        <p class="intro">${intro}</p>
        <div class="meta">
          <div class="pill">서울 · 한국</div>
          <div class="pill">오픈 to 협업</div>
        </div>
        <div class="actions">
          <button class="btn" id="copyEmail">이메일 복사</button>
          <a class="btn" href="#career">경력 보기</a>
        </div>
      </div>
    </div>

    <div id="career" class="section">
      <h3>경력</h3>
      <div class="timeline">
        ${career.map(c => `
          <div class="item">
            <div class="dot"></div>
            <div class="content">
              <div style="font-weight:700">${c.title}</div>
              <div class="muted">${c.period}</div>
              <div style="margin-top:6px">${c.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h3>기술 스택</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <div class="pill">JavaScript</div>
        <div class="pill">React</div>
        <div class="pill">Vue</div>
        <div class="pill">TypeScript</div>
      </div>
    </div>
  </div>
`

document.getElementById('copyEmail').addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText('hello@example.com')
    const btn = document.getElementById('copyEmail')
    btn.textContent = '이메일 복사됨'
    setTimeout(()=> btn.textContent = '이메일 복사', 1800)
  }catch(e){
    alert('클립보드 접근에 실패했습니다. 이메일: hello@example.com')
  }
})
