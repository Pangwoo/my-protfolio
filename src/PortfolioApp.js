import React from "react";

export default function PortfolioApp() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">내 포트폴리오</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">소개</a>
            <a href="#projects" className="hover:underline">프로젝트</a>
            <a href="#contact" className="hover:underline">연락처</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4 space-y-20">
        <section id="about" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">안녕하세요 👋</h2>
          <p className="text-lg max-w-2xl mx-auto">
            저는 웹 개발자입니다. 사용자 중심의 깔끔한 UI를 만드는 것을 좋아해요.
          </p>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-semibold text-center mb-10">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">프로젝트 이름</h3>
              <p className="text-gray-700">간단한 프로젝트 설명입니다.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">다른 프로젝트</h3>
              <p className="text-gray-700">이 프로젝트에 대한 간략한 설명입니다.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">연락하기</h2>
          <p>이메일: example@email.com</p>
          <p>GitHub: github.com/yourusername</p>
        </section>
      </main>

      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2025 내 이름. All rights reserved.</p>
      </footer>
    </div>
  );
}
