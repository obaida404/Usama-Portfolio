import { Icon } from "@iconify/react"

const stats = [
  { icon: "mdi:clock-time-four-outline", value: "30+", label: "years in aquatics" },
  { icon: "mdi:account-swim-outline", value: "1,500+", label: "competitive swimmers developed" },
  { icon: "mdi:certificate-outline", value: "3,000+", label: "aquatics professionals certified" },
  { icon: "mdi:trophy-outline", value: "6", label: "African and Arab titles" }
]

const StatCards = () => (
  <div className="stat-grid">
    {stats.map(({ icon, value, label }) => (
      <article className="stat-card" key={label}>
        <Icon icon={icon} width="22" height="22" aria-hidden="true" />
        <p className="stat-value">{value}</p><p className="stat-label">{label}</p>
      </article>
    ))}
  </div>
)
export default StatCards
