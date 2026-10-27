import { useEffect, useRef } from 'react';
import { useLang } from '../i18n';
import { badgeCategories, badgesIntro, type BadgeItem } from '../content';

export type Badge = BadgeItem;

// Popup con el detalle de una certificación y, si existe, la imagen del certificado
export function BadgesModal({ badge, onClose }: { badge: Badge | null; onClose: () => void }) {
  const { t } = useLang();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (badge && !d.open) d.showModal();
    if (!badge && d.open) d.close();
  }, [badge]);

  return (
    <dialog
      ref={ref}
      className="badges-modal"
      aria-labelledby="cert-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {badge && (
        <div className={`modal-inner patch c-${badgeCategories[badge.category].color}`}>
          <div className="modal-head">
            <div className="cert-head">
              <span className={`badge-patch c-${badgeCategories[badge.category].color}`}>
                <span>{badge.glyph}</span>
              </span>
              <div>
                <h2 id="cert-title">{t(badge.title)}</h2>
                <p className="badge-meta">
                  {badge.now ? (
                    <em className="now">{t(badgesIntro.learning)}</em>
                  ) : (
                    `${badge.issuer}${badge.year ? ` · ${badge.year}` : ''}`
                  )}
                </p>
              </div>
            </div>
            <button type="button" className="modal-close" onClick={onClose} aria-label={t(badgesIntro.close)}>
              ✕
            </button>
          </div>
          {badge.image && (
            <figure className={`cert-view ${badge.square ? 'is-square' : ''}`}>
              <img src={badge.image} alt={t(badge.title)} />
            </figure>
          )}
          {badge.link && (
            <p className="cert-link">
              <a className="text-link" href={badge.link} target="_blank" rel="noreferrer">
                {t(badgesIntro.verify)} ↗
              </a>
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}
