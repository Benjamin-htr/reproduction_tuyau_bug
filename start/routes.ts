import router from '@adonisjs/core/services/router'
import someModuleRoutes from '#auth/start/routes'

router.on('/').render('pages/home').as('home')

const HealthChecksController = () => import('#core/controllers/health_checks_controller')

router.get('/health', [HealthChecksController])
someModuleRoutes()
