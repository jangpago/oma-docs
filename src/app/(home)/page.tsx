import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-fd-muted-foreground mb-4 tracking-widest uppercase">
          AI 개발 협업 체계
        </p>
        <h1 className="text-4xl font-bold mb-6 tracking-tight">
          oma
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 leading-relaxed">
          각자 다른 AI 도구를 쓰는 팀이 같은 프로젝트에서 같은 기준으로 움직이게 하는 얇은 수평 하네스.
          <br />
          현재 Claude Code와 Codex CLI 환경에서 사용할 수 있다.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            문서 보기
          </Link>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent"
          >
            시작하기
          </Link>
        </div>
      </div>
    </div>
  );
}
