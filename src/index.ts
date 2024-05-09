import '@/assets/index.css'
import type { App, Component } from 'vue'

import { Accordion, AccordionItem } from '@/components/ui/accordion'
import { Alert } from '@/components/ui/alert'
import { Avatar } from '@/components/ui/avatar'
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
import { Color, ColorPicker } from '@/components/ui/color-picker'
import { Combobox } from '@/components/ui/combobox'
import { DatePicker } from '@/components/ui/date-picker'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Dialog } from '@/components/ui/dialog'
import { Drawer } from '@/components/ui/drawer'
import { DropdownMenu, type MenuItem } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Icon } from '@/components/ui/icon'
import { Form } from '@/components/ui/form'
import { Popover } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { ProgressCircular } from '@/components/ui/progress-circular'
import { RadioGroup } from '@/components/ui/radio-group'
import { Select } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toaster, useToast } from '@/components/ui/toast'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup } from '@/components/ui/toggle-group'
import { Tooltip } from '@/components/ui/tooltip'
import { type Option } from '@/utils/options'

const PersonizelyUI: { [key:string]: Component } = {
  Accordion,
  AccordionItem,
  Alert,
  Avatar,
  AlertDialog,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Color,
  ColorPicker,
  Combobox,
  DatePicker,
  DateRangePicker,
  Dialog,
  Drawer,
  DropdownMenu,
  Input,
  Icon,
  Form,
  Popover,
  Progress,
  ProgressCircular,
  RadioGroup,
  Select,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  Tooltip
}

export function install (app: App) {
  Object.keys(PersonizelyUI).forEach((key) => {
    const Component = PersonizelyUI[key]
    app.component(`Ui${key}`, Component)
  })
}

export default {
  install,
  useAlertDialog,
  useToast,
  ...PersonizelyUI
}

export type {
  Option,
  MenuItem
}