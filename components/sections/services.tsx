import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const services = [
  {
    title: 'Starter Site',
    desc: 'A beautiful site that clearly explains what you do and helps clients reach out.',
    bullets: [
      '1–3 pages (for example: Home, About, Contact)',
      'Looks great on phones, tablets, and computers',
      'Clear contact form so clients can reach you',
      'Basic setup so your site can be found on Google',
      'Light copy and wording help if you need it',
    ],
    tag: 'Great for new offers',
  },
  {
    title: 'Growth Package',
    desc: 'More strategy, stronger conversion, and a site built to support consistent client flow.',
    bullets: [
      'Up to 6 pages (Services, FAQs, etc.)',
      'Everything in the starter package',
      'Online booking integration (clients can book sessions directly)',
      'Custom intake form built into your site',
      'Analytics so you can see how people are finding and using your site',
    ],
    tag: 'Most popular',
    featured: true,
  },
  {
    title: 'Ongoing Support',
    desc: 'Keep your site fresh with updates, new sections, and small improvements over time.',
    bullets: [
      'Content edits (new services, wording changes, etc.)',
      'Performance and speed checks',
      'Help adding new sections or forms as needed',
      'Continued support as your offerings grow',
    ],
    tag: 'Peace of mind',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Pick the level of support you need. We’ll keep it simple, and
            focused on helping the right clients find you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map(s => (
            <Card
              key={s.title}
              className={[
                'rounded-2xl',
                s.featured
                  ? 'border-emerald-200/70 shadow-sm'
                  : 'border-foreground/10',
              ].join(' ')}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl">{s.title}</CardTitle>
                  <Badge
                    className={
                      s.featured ? 'bg-emerald-100 text-emerald-900' : undefined
                    }
                    variant={s.featured ? 'default' : 'secondary'}
                  >
                    {s.tag}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {s.desc}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1">
                <div>
                  <Separator className="mb-4" />
                  <ul className="space-y-3 text-sm text-foreground/80 list-disc marker:text-emerald-300 ml-4">
                    {s.bullets.map(b => (
                      <li key={b}>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    variant={s.featured ? 'default' : 'outline'}
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">Talk about this</a>
                  </Button>
                  <p className="mt-3 text-xs text-foreground/60">
                    Not sure? We’ll choose together on the consult.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Flexibility section */}
        <div className="mt-10 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold tracking-tight">
                Not sure which package fits?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                That’s totally okay. Think of these packages as starting points.
                Tell me what you need (or what you’re trying to improve), and
                we’ll shape a plan that fits—whether it’s a simple site, booking
                + forms, or a few focused upgrades.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#contact">Book a free consult</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Ask a question</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
